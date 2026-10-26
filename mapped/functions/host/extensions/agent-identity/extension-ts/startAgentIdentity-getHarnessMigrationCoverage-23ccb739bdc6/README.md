# `startAgentIdentity/getHarnessMigrationCoverage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496614-496623](../../../../../../../reference/runtime/host-main.cjs#L496614-L496623) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496614-496623](../../../../../../../reference/runtime/host-main.cjs#L496614-L496623) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:496614

Chamadas escritas diretamente neste corpo: `context2.host.log`, `errorLogTag`, `isWriteEnabled`.

SHA-256 do trecho: `834b640e1b474a3a69646ac003774b6f0edfe13d723abcdb6cf84bcd144fbfd2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
