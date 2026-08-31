const { resultado, setResultado, adicionarConsulta } = useCep();

const obterCep = async () => {
  try {
    const data = await buscarCep(cep);
    setResultado(data);
    if (!data.erro) {
      adicionarConsulta(data);
    }
  } catch (err) {
    console.error("Erro ao consultar CEP", err);
  }

  {resultado?.erro && <Text style={styles.erro}>CEP inválido</Text>}
  {resultado?.erro && <Text style={styles.erro}>CEP inválido</Text>}
};