# `renderEmailThread`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/read-email-thread-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/read-email-thread-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765085-765093](../../../../../../../reference/runtime/host-main.cjs#L765085-L765093) | `FunctionDeclaration` | não | `threadId, thread` |
| [evaluation:558453-558461](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558453-L558461) | `FunctionDeclaration` | não | `threadId, thread` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765085-765093](../../../../../../../reference/runtime/host-main.cjs#L765085-L765093) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558453-558461](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558453-L558461) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:765085

Chamadas escritas diretamente neste corpo: `lines2.join`, `thread.messages.forEach`.

SHA-256 do trecho: `5b2371bcbb65845ec8fb12d329496f15e22f4f7abdb8ca3c5a04521a52aed8a2`.

### evaluation:558453

Chamadas escritas diretamente neste corpo: `lines2.join`, `thread.messages.forEach`.

SHA-256 do trecho: `5b2371bcbb65845ec8fb12d329496f15e22f4f7abdb8ca3c5a04521a52aed8a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
