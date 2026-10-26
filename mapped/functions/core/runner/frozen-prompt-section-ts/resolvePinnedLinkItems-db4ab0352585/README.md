# `resolvePinnedLinkItems`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/frozen-prompt-section.ts` · [README do módulo](../../../../../modules/core/runner/frozen-prompt-section-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:530570-530582](../../../../../../reference/runtime/sand-eval-runner.cjs#L530570-L530582) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530570-530582](../../../../../../reference/runtime/sand-eval-runner.cjs#L530570-L530582) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:530570

Chamadas escritas diretamente neste corpo: `args.live`, `resolveFrozenPromptSection`, `store.getPromptSectionSnapshot`, `store.setPromptSectionSnapshot`.

SHA-256 do trecho: `31dc0d94336bd6425f2b731c8184b76e02ad070c3155d349d461a01f792771c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
