# `wrapGitStatusInCodeFence`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640027-640035](../../../../../../reference/runtime/host-main.cjs#L640027-L640035) | `FunctionDeclaration` | não | `status` |
| [evaluation:430641-430649](../../../../../../reference/runtime/sand-eval-runner.cjs#L430641-L430649) | `FunctionDeclaration` | não | `status` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640027-640035](../../../../../../reference/runtime/host-main.cjs#L640027-L640035) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430641-430649](../../../../../../reference/runtime/sand-eval-runner.cjs#L430641-L430649) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640027

Chamadas escritas diretamente neste corpo: `status.trim`.

SHA-256 do trecho: `b0b7e09cee55c8c6a373e0c37adf009df6090d02b30c4f414ae8385c21e52c30`.

### evaluation:430641

Chamadas escritas diretamente neste corpo: `status.trim`.

SHA-256 do trecho: `b0b7e09cee55c8c6a373e0c37adf009df6090d02b30c4f414ae8385c21e52c30`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
