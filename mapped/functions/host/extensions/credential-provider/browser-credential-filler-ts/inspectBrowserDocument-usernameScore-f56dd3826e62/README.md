# `inspectBrowserDocument/usernameScore`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547337-547349](../../../../../../../reference/runtime/host-main.cjs#L547337-L547349) | `ArrowFunctionExpression` | não | `input2, positions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547337-547349](../../../../../../../reference/runtime/host-main.cjs#L547337-L547349) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:547337

Chamadas escritas diretamente neste corpo: `/(?:^|\W)(?:user(?:name|[\s_-]*id)?|e[\s_-]*mail|login)(?:\W|$)/i.test`, `autocompleteTokens`, `descriptorFor`, `input2.type.toLowerCase`, `tokens.includes`.

Alvos de atribuição ou incremento: `score`.

SHA-256 do trecho: `913ddb396aacb3406d8cf519b947854b8d201776f2bd80ab90c50c8fa0aed591`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
