# `DebugSubagentInstructionsSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/testing/parent.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636316-636318](../../../../../../../reference/runtime/host-main.cjs#L636316-L636318) | `FunctionDeclaration` | não | `{ computerUseSubagentName = "computerUse", stepNumber }` |
| [evaluation:424369-424371](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424369-L424371) | `FunctionDeclaration` | não | `{ computerUseSubagentName = "computerUse", stepNumber }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636316-636318](../../../../../../../reference/runtime/host-main.cjs#L636316-L636318) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424369-424371](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424369-L424371) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:636316

Chamadas escritas diretamente neste corpo: `jsx`, `jsxs`.

SHA-256 do trecho: `ac7d33532c37c0e0892033f54aef6c956e85e1ba13bde64fcb686bf4d7f26051`.

### evaluation:424369

Chamadas escritas diretamente neste corpo: `jsx`, `jsxs`.

SHA-256 do trecho: `ac7d33532c37c0e0892033f54aef6c956e85e1ba13bde64fcb686bf4d7f26051`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
