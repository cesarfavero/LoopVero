# `normalizeAgentProfileIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-agent-profile-prompt.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529768-529770](../../../../../../reference/runtime/sand-eval-runner.cjs#L529768-L529770) | `FunctionDeclaration` | não | `profile` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529768-529770](../../../../../../reference/runtime/sand-eval-runner.cjs#L529768-L529770) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529768

Chamadas escritas diretamente neste corpo: `profile.description.trim`, `profile.name.trim`.

SHA-256 do trecho: `f8d5c2925623bf99fb94012b924129ba5a3359164f34edd97fdb0844f11f3169`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
