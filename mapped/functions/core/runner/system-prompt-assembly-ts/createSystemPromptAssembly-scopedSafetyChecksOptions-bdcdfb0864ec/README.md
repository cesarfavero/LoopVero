# `createSystemPromptAssembly/scopedSafetyChecksOptions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553519-553522](../../../../../../reference/runtime/sand-eval-runner.cjs#L553519-L553522) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553519-553522](../../../../../../reference/runtime/sand-eval-runner.cjs#L553519-L553522) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553519

Chamadas escritas diretamente neste corpo: `deps.gates.scopedSafetyChecks`, `deps.scopedSafetyChecksCopy`.

SHA-256 do trecho: `3cac9433354a639ed1f925c3654646e4d9da46d1933ade579752268f5431c211`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
