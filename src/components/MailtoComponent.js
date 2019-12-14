var React  = require('react');
var Mailto = require('react-mailto');
 
var MailtoComponent = React.createClass({
    render: function () {
      return (
        <Mailto email="antoniahackenberger@gmail.com" obfuscate={true}>
        CONTACT ME
        </Mailto>
      );
    }
  });

  export default MailtoComponent;