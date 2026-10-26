# `createPromptCollectorGlue/persistAutomationStatusReminder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-collector-glue.ts` · [README do módulo](../../../../../modules/core/runner/prompt-collector-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533736-533747](../../../../../../reference/runtime/sand-eval-runner.cjs#L533736-L533747) | `FunctionDeclaration` | não | `reminder, compactionEpoch` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533736-533747](../../../../../../reference/runtime/sand-eval-runner.cjs#L533736-L533747) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:533736

Chamadas escritas diretamente neste corpo: `snapshots.getPromptSectionSnapshot`, `snapshots.setPromptSectionSnapshot`.

SHA-256 do trecho: `18a76eb4e2cd9e6d73203827cf3a13b206d4ed64d20af5b0624b59f5857abb7f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
