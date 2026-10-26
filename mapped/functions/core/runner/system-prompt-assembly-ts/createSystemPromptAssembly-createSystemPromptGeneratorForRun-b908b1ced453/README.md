# `createSystemPromptAssembly/createSystemPromptGeneratorForRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553732-553748](../../../../../../reference/runtime/sand-eval-runner.cjs#L553732-L553748) | `FunctionDeclaration` | não | `{     profileSnapshot,     sendToUserEndTurnEnabled = () => false   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553732-553748](../../../../../../reference/runtime/sand-eval-runner.cjs#L553732-L553748) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:553732

Chamadas escritas diretamente neste corpo: `readBaseSystemPromptOverride`, `readLeanExecutorFacts`, `usesBuiltinSkillPointers`.

SHA-256 do trecho: `25e316f42e7efa0944b7e3d874fb9393988f05f6e2544d1958e13dde5aa7f16b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
