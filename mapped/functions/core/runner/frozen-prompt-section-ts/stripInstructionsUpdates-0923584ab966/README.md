# `stripInstructionsUpdates`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/frozen-prompt-section.ts` · [README do módulo](../../../../../modules/core/runner/frozen-prompt-section-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717100-717105](../../../../../../reference/runtime/host-main.cjs#L717100-L717105) | `FunctionDeclaration` | não | `text3` |
| [evaluation:530703-530708](../../../../../../reference/runtime/sand-eval-runner.cjs#L530703-L530708) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717100-717105](../../../../../../reference/runtime/host-main.cjs#L717100-L717105) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:530703-530708](../../../../../../reference/runtime/sand-eval-runner.cjs#L530703-L530708) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:717100

Chamadas escritas diretamente neste corpo: `.trim`, `stripped.replace`, `text3.includes`, `text3.replace`.

SHA-256 do trecho: `fba97662958da661b317e3c7c63abe370e2ee91fd8202177aa0fccd50db71bd7`.

### evaluation:530703

Chamadas escritas diretamente neste corpo: `.trim`, `stripped.replace`, `text3.includes`, `text3.replace`.

SHA-256 do trecho: `fba97662958da661b317e3c7c63abe370e2ee91fd8202177aa0fccd50db71bd7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
