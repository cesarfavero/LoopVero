# `renderEmailInboxes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/list-email-inboxes-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/list-email-inboxes-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764895-764904](../../../../../../../reference/runtime/host-main.cjs#L764895-L764904) | `FunctionDeclaration` | não | `inboxes` |
| [evaluation:558263-558272](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558263-L558272) | `FunctionDeclaration` | não | `inboxes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764895-764904](../../../../../../../reference/runtime/host-main.cjs#L764895-L764904) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:558263-558272](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558263-L558272) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:764895

Chamadas escritas diretamente neste corpo: `lines2.join`, `lines2.push`.

SHA-256 do trecho: `cfe19e2e11c002100562b9937e6b0be47d5bd5c3f0453c4f9699c427b2d4ad23`.

### evaluation:558263

Chamadas escritas diretamente neste corpo: `lines2.join`, `lines2.push`.

SHA-256 do trecho: `cfe19e2e11c002100562b9937e6b0be47d5bd5c3f0453c4f9699c427b2d4ad23`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
