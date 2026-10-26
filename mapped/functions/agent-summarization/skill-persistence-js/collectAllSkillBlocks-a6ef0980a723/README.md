# `collectAllSkillBlocks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/skills/README.md).

**Módulo:** `agent-summarization/skill-persistence.js` · [README do módulo](../../../../modules/agent-summarization/skill-persistence-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620610-620617](../../../../../reference/runtime/host-main.cjs#L620610-L620617) | `FunctionDeclaration` | não | `messages2` |
| [evaluation:304964-304971](../../../../../reference/runtime/sand-eval-runner.cjs#L304964-L304971) | `FunctionDeclaration` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620610-620617](../../../../../reference/runtime/host-main.cjs#L620610-L620617) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:304964-304971](../../../../../reference/runtime/sand-eval-runner.cjs#L304964-L304971) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:620610

Chamadas escritas diretamente neste corpo: `extractManuallyAttachedSkillBlocks`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `cedbd3d8cb8044bdea07eced6d4a93b4ff15b71b3140e391b5ee618cd99a985a`.

### evaluation:304964

Chamadas escritas diretamente neste corpo: `extractManuallyAttachedSkillBlocks`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `34d5effa2198302b8659bf62dc8440648bc8a8fe30001be1a8a8de818672aec9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
