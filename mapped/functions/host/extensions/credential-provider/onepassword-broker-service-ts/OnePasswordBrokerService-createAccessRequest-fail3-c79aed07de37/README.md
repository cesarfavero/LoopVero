# `OnePasswordBrokerService.createAccessRequest/fail3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550843-550852](../../../../../../../reference/runtime/host-main.cjs#L550843-L550852) | `ArrowFunctionExpression` | não | `reason, detail, extensionApi` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550843-550852](../../../../../../../reference/runtime/host-main.cjs#L550843-L550852) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:550843

Chamadas escritas diretamente neste corpo: `auditReasonFor`, `this.options.audit`.

SHA-256 do trecho: `a19091db7ec21e9194e8d75fb7e74652b91fcb8b608aa0b969c5a700101184ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
