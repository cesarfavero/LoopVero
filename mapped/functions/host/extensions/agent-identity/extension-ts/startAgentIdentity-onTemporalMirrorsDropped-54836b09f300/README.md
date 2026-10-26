# `startAgentIdentity/onTemporalMirrorsDropped`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496696-496706](../../../../../../../reference/runtime/host-main.cjs#L496696-L496706) | `ArrowFunctionExpression` | não | `agentIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496696-496706](../../../../../../../reference/runtime/host-main.cjs#L496696-L496706) | 0 | 1 | 0 | 0 | 0 | 1 |

### host:496696

Chamadas escritas diretamente neste corpo: `context2.host.log`, `errorLogTag`, `listener`.

SHA-256 do trecho: `8ed39fa58a47401aea54683280b93a1f1ec62daebf8b1896a46ee2c60f6d4441`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
