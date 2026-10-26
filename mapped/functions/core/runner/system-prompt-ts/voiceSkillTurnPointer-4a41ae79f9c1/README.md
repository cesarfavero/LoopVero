# `voiceSkillTurnPointer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:532652-532658](../../../../../../reference/runtime/sand-eval-runner.cjs#L532652-L532658) | `FunctionDeclaration` | não | `{   voiceCallEnabled,   skillAccess = "read" }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532652-532658](../../../../../../reference/runtime/sand-eval-runner.cjs#L532652-L532658) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:532652

Chamadas escritas diretamente neste corpo: `SKILL_OPEN_COPY[computed].openManaged`.

SHA-256 do trecho: `9860082be30122c654d0a3f29dd3168a75163a5b7f3a5720113aac6e005f5fb1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
