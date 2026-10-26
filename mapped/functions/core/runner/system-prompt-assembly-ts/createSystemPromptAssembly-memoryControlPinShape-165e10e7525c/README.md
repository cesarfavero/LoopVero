# `createSystemPromptAssembly/memoryControlPinShape`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552936-552941](../../../../../../reference/runtime/sand-eval-runner.cjs#L552936-L552941) | `FunctionDeclaration` | não | `pin` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552936-552941](../../../../../../reference/runtime/sand-eval-runner.cjs#L552936-L552941) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:552936

Chamadas escritas diretamente neste corpo: `deps.userMemory`, `isMemoryControlRender`, `rendersUserMemoryTier`.

SHA-256 do trecho: `4790f42dc94c850a3baa7c6c9ac5e65a3a15f5d6045c3c10a4a662fb182359d9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
