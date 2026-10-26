# `messageText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546348-546362](../../../../../../reference/runtime/sand-eval-runner.cjs#L546348-L546362) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546348-546362](../../../../../../reference/runtime/sand-eval-runner.cjs#L546348-L546362) | 4 | 1 | 0 | 3 | 0 | 0 |

### evaluation:546348

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isUnknownRecord2`, `parts.join`, `parts.push`.

SHA-256 do trecho: `8bb3f5f86bf2aca4ecf6fcc5f19eb82bb8724916401572d660cbaf7464939235`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
