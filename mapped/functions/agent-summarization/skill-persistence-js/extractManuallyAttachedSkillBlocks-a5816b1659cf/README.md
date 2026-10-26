# `extractManuallyAttachedSkillBlocks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/skills/README.md).

**Módulo:** `agent-summarization/skill-persistence.js` · [README do módulo](../../../../modules/agent-summarization/skill-persistence-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620591-620609](../../../../../reference/runtime/host-main.cjs#L620591-L620609) | `FunctionDeclaration` | não | `redactedMessage` |
| [evaluation:304945-304963](../../../../../reference/runtime/sand-eval-runner.cjs#L304945-L304963) | `FunctionDeclaration` | não | `redactedMessage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620591-620609](../../../../../reference/runtime/host-main.cjs#L620591-L620609) | 3 | 2 | 0 | 2 | 0 | 0 |
| [evaluation:304945-304963](../../../../../reference/runtime/sand-eval-runner.cjs#L304945-L304963) | 3 | 2 | 0 | 2 | 0 | 0 |

### host:620591

Chamadas escritas diretamente neste corpo: `.map`, `content.filter`, `fromRedactedCoreMessage`, `match2.trim`, `segment.match`, `skillBlocks.push`.

SHA-256 do trecho: `e6ce401060650175cadec1a9fc5cb0a093e8be31692cf0778380432278992248`.

### evaluation:304945

Chamadas escritas diretamente neste corpo: `.map`, `content.filter`, `fromRedactedCoreMessage`, `match2.trim`, `segment.match`, `skillBlocks.push`.

SHA-256 do trecho: `e6ce401060650175cadec1a9fc5cb0a093e8be31692cf0778380432278992248`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
