# `parseUnreadState`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db-serde.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-serde-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718016-718035](../../../../../../../reference/runtime/host-main.cjs#L718016-L718035) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718016-718035](../../../../../../../reference/runtime/host-main.cjs#L718016-L718035) | 6 | 0 | 0 | 3 | 0 | 1 |

### host:718016

Chamadas escritas diretamente neste corpo: `JSON.parse`, `Math.floor`, `Number.isFinite`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `238c579b5225c96af2676041642a143d6503e7d135684b78e713fd9cc8923a44`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
