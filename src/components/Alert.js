import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample() {
  return (
    <Alert variant="success">
      <Alert.Heading>Gracias por visitarnos</Alert.Heading>
      <p>
      Más registros en @imagenesnaturaleza.cl
      </p>
      <hr />
      <p className="mb-0">
        Ejemplo de una alerta usando React-Bootstrap</p>
    </Alert>
  );
}

export default AdditionalContentExample;