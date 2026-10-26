# `SandConnectorSecretStore.reportFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/connector-secret-store.ts` · [README do módulo](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719230-719248](../../../../../../../reference/runtime/host-main.cjs#L719230-L719248) | `method` | não | `agentId, operation, path33, error64, copy` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719230-719248](../../../../../../../reference/runtime/host-main.cjs#L719230-L719248) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:719230

Chamadas escritas diretamente neste corpo: `.add`, `.set`, `errorLogTag`, `new Map`, `new Set`, `refusalClass`, `reportSessionDiagnostic`, `reported2.has`, `this.log`, `this.reportedFailures.get`.

Alvos de atribuição ou incremento: `this.reportedFailures`.

SHA-256 do trecho: `578275bc0b726c708c6382244e71db6262553540c54ced7e53339e677cb37237`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
