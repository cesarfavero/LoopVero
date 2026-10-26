# `evaluateOnTarget/<callback>/<callback>/finish`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547177-547184](../../../../../../../reference/runtime/host-main.cjs#L547177-L547184) | `ArrowFunctionExpression` | não | `error64, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547177-547184](../../../../../../../reference/runtime/host-main.cjs#L547177-L547184) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:547177

Chamadas escritas diretamente neste corpo: `reject2`, `resolve31`, `signal.removeEventListener`, `socket.close`.

Alvos de atribuição ou incremento: `settled`.

SHA-256 do trecho: `f5dd1d1e77ce6b13b64c2143c71aae8f615a463b637d57f6449d3b7fd636e8b6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
