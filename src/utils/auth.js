import React from "react";

function withAdminAuth(WrappedComponent) {
  return class extends React.Component {
    state = {
      isAdmin: false,
    }
    async UNSAFE_componentWillMount() {
      const currentRole = await getCurrentUserRole();
      this.setState({
        isAdmin: currentRole === 'Admin',
      });
    }
    render() {
      if (this.state.isAdmin) {
        return <WrappedComponent {...this.props} />;
      } else {
        return (<div>您没有权限查看该页面，请联系管理员！</div>);
      }
    }
  };
}

export default withAdminAuth