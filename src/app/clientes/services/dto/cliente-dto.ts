export class ClienteDto {
    idCliente: string;
    clienteTipo: string;
    clienteEmpresa: string;
    clienteNome: string;
    clienteCPFCNPJ: string;
    clienteEmail: string;
    clienteEmailCobranca: string;
    clienteFone: string;
    clienteFax: string;
    clienteEndereco: string;
    clienteBairro: string;
    clienteCidade: string;
    clienteEstado: string;
    clienteCEP: string;
    clienteLimiteMapeamento: string;
    clienteLimiteSubdominio: string;
    clienteLimiteMysql: string;
    clienteLimiteMssql: string;
    clienteLimitePgsql: string;
    clienteLimiteFirebird: string;
    clienteLimiteFTPADD: string;
    clienteUniBox: string;
    clienteAcessoFTP: string;
    clienteAcessoDownloadBackup: string;

    constructor(values: Object = {}) {

        Object.assign(this, values);
    }
}
