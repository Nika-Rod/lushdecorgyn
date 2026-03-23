export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="text-center">
        <p className="text-xs">
          © {currentYear} Lushdecor. Todos os direitos reservados.
          Proibida a reprodução total ou parcial deste material sem autorização
          prévia.
        </p>
      </div>
    </footer>
  );
};
