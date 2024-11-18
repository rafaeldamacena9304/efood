import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { usePurchaseMutation } from "../../../services/api";
import { useFormik } from "formik";
import * as yup from "yup";

import { RootState } from "../../../redux/store";

import * as stl from "./styles";

import { close, remove, clear } from "../../../redux/Cart/cartReducer";
import lixeira from "../../../assets/images/lixeira.png";

export const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state: RootState) => state.cart);

  const [isTyping, setIsTyping] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const [pedidoId] = useState(() => Math.floor(1000 + Math.random() * 9000));

  const [purchase, { isSuccess }] = usePurchaseMutation();

  const getFormError = (nomeCampo: string, mensagem?: string) => {
    const foiAlterado = nomeCampo in formik.touched;
    const invalido = nomeCampo in formik.errors;

    if (foiAlterado && invalido) {
      return mensagem;
    } else {
      return "";
    }
  };

  const fecharCarrinho = () => {
    dispatch(close());
  };

  const removerItem = (id: number) => {
    dispatch(remove(id));
  };

  const converterReal = (preco: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  const valorTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco);
    }, 0);
  };

  const formik = useFormik({
    initialValues: {
      receiver: "",
      adressDescription: "",
      city: "",
      zipCode: "",
      number: "",
      complement: "",
      nameCard: "",
      cardNumber: "",
      cardCode: "",
      expirationMonth: "",
      expirationYear: "",
    },
    validationSchema: yup.object({
      receiver: yup
        .string()
        .min(3, "Por favor, digite um nome válido")
        .required("Por favor, digite um nome"),
      adressDescription: yup
        .string()
        .min(5, "Por favor, digite um endereço válido")
        .required("Este campo é obrigatório"),
      city: yup
        .string()
        .min(4, "Por favor, digite uma cidade válida")
        .required("Este campo é obrigatório"),
      zipCode: yup
        .number()
        .min(8, "Digite um CEP que exista")
        .required("Este campo é obrigatório"),
      nameCard: yup
        .string()
        .min(3, "Por favor, digite um nome válido")
        .required("Este campo é obrigatório"),
      cardNumber: yup.number().required("Este campo é obrigatório"),
      cardCode: yup
        .number()
        .max(999, "Máximo permitido: 999")
        .min(1, "Valor mínimo: 1")
        .required("Este campo é obrigatório"),
      expirationMonth: yup
        .number()
        .min(1, "Digite um mês válido")
        .max(12, "Digite um mês válido")
        .required("Este campo é obrigatório"),
      expirationYear: yup
        .number()
        .min(2024, "Digite um ano válido")
        .max(9999, "Digite um ano válido")
        .required("Este campo é obrigatório"),
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 0,
          },
        ],
        delivery: {
          receiver: values.receiver,
          adress: {
            description: values.adressDescription,
            city: values.city,
            zipCode: values.zipCode,
            number: 12,
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear),
            },
          },
        },
      });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setSuccessMessage(true);
    }
  }, [isSuccess]);

  const Concluir = () => {
    formik.resetForm();
    setIsPaying(false);
    setIsTyping(false);
    fecharCarrinho();
    dispatch(clear());
    setSuccessMessage(false);
  };

  const isDeliverySectionValid = () => {
    return (
      formik.touched.receiver &&
      !formik.errors.receiver &&
      formik.touched.adressDescription &&
      !formik.errors.adressDescription &&
      formik.touched.city &&
      !formik.errors.city &&
      formik.touched.zipCode &&
      !formik.errors.zipCode &&
      formik.touched.number &&
      !formik.errors.number
    );
  };

  if (isOpen === true) {
    return (
      <stl.CartContainer>
        <stl.Overlay onClick={fecharCarrinho} />
        <stl.Cart>
          {successMessage ? (
            <>
              <h3>Pedido realizado! - #{pedidoId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <stl.Button onClick={Concluir}>Concluir</stl.Button>
            </>
          ) : (
            <>
              {isTyping || isPaying ? (
                <></>
              ) : (
                items.map((item) => (
                  <stl.CartItem key={item.id}>
                    <img src={item.foto} alt="" />
                    <div>
                      <h3>{item.nome}</h3>
                      <p>{converterReal(item.preco)}</p>
                    </div>
                    <img
                      onClick={() => removerItem(item.id)}
                      className="excluir"
                      src={lixeira}
                      alt=""
                    />
                  </stl.CartItem>
                ))
              )}

              {items.length > 0 ? (
                <>
                  <stl.PrecoTotal>
                    <span>Valor total</span>
                    <span>{converterReal(valorTotal())}</span>
                  </stl.PrecoTotal>
                  {!isTyping && (
                    <stl.Button onClick={() => setIsTyping(true)}>
                      Continuar com a compra
                    </stl.Button>
                  )}
                </>
              ) : (
                <stl.CarrinhoVazio>
                  Nada por aqui... <br />
                  <br />
                  Adicione itens ao carrinho !
                </stl.CarrinhoVazio>
              )}
              {isTyping && items.length > 0 && !isPaying && (
                <>
                  <stl.Form onSubmit={formik.handleSubmit}>
                    <h3>Dados para entrega</h3>
                    <stl.InputContainer>
                      <stl.Label>Quem irá receber</stl.Label>
                      <stl.Input
                        id="receiver"
                        name="receiver"
                        value={formik.values.receiver}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <small>
                        {getFormError("receiver", formik.errors.receiver)}
                      </small>
                    </stl.InputContainer>
                    <stl.InputContainer>
                      <stl.Label>Endereço</stl.Label>
                      <stl.Input
                        id="adressDescription"
                        name="adressDescription"
                        value={formik.values.adressDescription}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <small>
                        {getFormError(
                          "adressDescription",
                          formik.errors.adressDescription
                        )}
                      </small>
                    </stl.InputContainer>
                    <stl.InputContainer>
                      <stl.Label>Cidade</stl.Label>
                      <stl.Input
                        id="city"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <small>{getFormError("city", formik.errors.city)}</small>
                    </stl.InputContainer>
                    <stl.InputContainer display="flex">
                      <stl.InputGroup width="60" display="flex">
                        <stl.Label>CEP</stl.Label>
                        <stl.Input
                          id="zipCode"
                          name="zipCode"
                          value={formik.values.zipCode}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getFormError("zipCode", formik.errors.zipCode)}
                        </small>
                      </stl.InputGroup>
                      <stl.InputGroup width="30" display="flex">
                        <stl.Label>Número</stl.Label>
                        <stl.Input
                          id="number"
                          name="number"
                          value={formik.values.number}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getFormError("number", formik.errors.number)}
                        </small>
                      </stl.InputGroup>
                    </stl.InputContainer>
                    <stl.InputContainer>
                      <stl.Label>Complemento (opcional)</stl.Label>
                      <stl.Input
                        id="complement"
                        name="complement"
                        value={formik.values.complement}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <small>
                        {getFormError("complement", formik.errors.complement)}
                      </small>
                    </stl.InputContainer>
                    <stl.Button
                      type="button"
                      onClick={() => {
                        if (isDeliverySectionValid()) {
                          setIsPaying(true);
                        } else {
                          alert(
                            "Por favor, preencha todos os campos de entrega corretamente antes de continuar."
                          );
                        }
                      }}
                    >
                      Continuar para pagamento
                    </stl.Button>

                    <stl.Button onClick={() => setIsTyping(false)}>
                      Voltar para produtos
                    </stl.Button>
                  </stl.Form>
                </>
              )}

              {isPaying && items.length > 0 && (
                <>
                  <stl.Form onSubmit={formik.handleSubmit}>
                    <h3>Pagamento</h3>
                    <stl.InputContainer>
                      <stl.Label>Nome no cartão</stl.Label>
                      <stl.Input
                        id="nameCard"
                        name="nameCard"
                        value={formik.values.nameCard}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <small>
                        {getFormError("nameCard", formik.errors.nameCard)}
                      </small>
                    </stl.InputContainer>
                    <stl.InputContainer display="flex">
                      <stl.InputGroup display="flex" width="60">
                        <stl.Label>Número do cartão</stl.Label>
                        <stl.Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formik.values.cardNumber}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getFormError("cardNumber", formik.errors.cardNumber)}
                        </small>
                      </stl.InputGroup>
                      <stl.InputGroup width="30" display="flex">
                        <stl.Label>CVV</stl.Label>
                        <stl.Input
                          id="cardCode"
                          name="cardCode"
                          value={formik.values.cardCode}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getFormError("cardCode", formik.errors.cardCode)}
                        </small>
                      </stl.InputGroup>
                    </stl.InputContainer>
                    <stl.InputContainer display="flex">
                      <stl.InputGroup width="45" display="flex">
                        <stl.Label>Mês de validade</stl.Label>
                        <stl.Input
                          id="expirationMonth"
                          name="expirationMonth"
                          value={formik.values.expirationMonth}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getFormError(
                            "expirationMonth",
                            formik.errors.expirationMonth
                          )}
                        </small>
                      </stl.InputGroup>
                      <stl.InputGroup width="45" display="flex">
                        <stl.Label>Ano de validade</stl.Label>
                        <stl.Input
                          id="expirationYear"
                          name="expirationYear"
                          value={formik.values.expirationYear}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <small>
                          {getFormError(
                            "expirationYear",
                            formik.errors.expirationYear
                          )}
                        </small>
                      </stl.InputGroup>
                    </stl.InputContainer>
                    <stl.Button type="submit">Finalizar compra</stl.Button>
                    <stl.Button onClick={() => setIsPaying(false)}>
                      Voltar para entrega
                    </stl.Button>
                  </stl.Form>
                </>
              )}
            </>
          )}
        </stl.Cart>
      </stl.CartContainer>
    );
  } else {
    return <></>;
  }
};
