# `createSystemPromptAssembly/getUserIdentitySection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553217-553221](../../../../../../reference/runtime/sand-eval-runner.cjs#L553217-L553221) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553217-553221](../../../../../../reference/runtime/sand-eval-runner.cjs#L553217-L553221) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:553217

Chamadas escritas diretamente neste corpo: `deps.requestContext.resolve`, `renderSandExecutorLeanUserIdentity`, `renderUserIdentitySystemPrompt`.

SHA-256 do trecho: `ab96a1db1c11e070ca5d6b3fab7b0d5f631ead7d800e55c099a42b275eece7cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
