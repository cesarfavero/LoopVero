# `inspectBrowserDocument/usernameLike`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547370-547375](../../../../../../../reference/runtime/host-main.cjs#L547370-L547375) | `ArrowFunctionExpression` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547370-547375](../../../../../../../reference/runtime/host-main.cjs#L547370-L547375) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:547370

Chamadas escritas diretamente neste corpo: `/(?:^|\W)(?:user(?:name|[\s_-]*id)?|e[\s_-]*mail|login)(?:\W|$)/i.test`, `autocompleteTokens`, `descriptorFor`, `input2.type.toLowerCase`, `tokens.includes`.

SHA-256 do trecho: `7f0bdd442ca623a710dbd02ed8435b545196a8022c2e2face55517d48ebf7409`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
