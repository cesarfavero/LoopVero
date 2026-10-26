# `renderBotFilesPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-sections/bot-files-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/bot-files-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538474-538477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538474-L538477) | `FunctionDeclaration` | não | `folderPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538474-538477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538474-L538477) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538474

Chamadas escritas diretamente neste corpo: `folderPath.endsWith`.

SHA-256 do trecho: `eacad530df4b34aba59c3e1ca8bf7dba1aafef3c721a66c3d24d7f1684396ec4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
