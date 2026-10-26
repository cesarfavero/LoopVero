# `startCredentialProvider/requestAutoFill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:551757-551794](../../../../../../../reference/runtime/host-main.cjs#L551757-L551794) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551757-551794](../../../../../../../reference/runtime/host-main.cjs#L551757-L551794) | 2 | 0 | 1 | 4 | 0 | 1 |

### host:551757

Chamadas escritas diretamente neste corpo: `auditRequest`, `context2.host.log`, `errorLogTag`, `requestAutoFillOnBackend`.

Alvos de atribuição ou incremento: `decision`.

SHA-256 do trecho: `837ffeaa58bcf4b3ea75550759b9f6dbfea8741111ed8bbc90e7d8cc3539338a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
