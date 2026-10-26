# `isSkillPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639768-639779](../../../../../../reference/runtime/host-main.cjs#L639768-L639779) | `FunctionDeclaration` | não | `path33` |
| [evaluation:430382-430393](../../../../../../reference/runtime/sand-eval-runner.cjs#L430382-L430393) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639768-639779](../../../../../../reference/runtime/host-main.cjs#L639768-L639779) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430382-430393](../../../../../../reference/runtime/sand-eval-runner.cjs#L430382-L430393) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:639768

Chamadas escritas diretamente neste corpo: `SKILL_GLOB_MATCHERS.some`, `path33.replace`, `skillPathCache.clear`, `skillPathCache.get`, `skillPathCache.set`.

Alvos de atribuição ou incremento: `isSkill`.

SHA-256 do trecho: `9607214540b92e4ad78ee39d9db17fdcf8fe89918fe45819871db0f9ebbf70bb`.

### evaluation:430382

Chamadas escritas diretamente neste corpo: `SKILL_GLOB_MATCHERS.some`, `path33.replace`, `skillPathCache.clear`, `skillPathCache.get`, `skillPathCache.set`.

Alvos de atribuição ou incremento: `isSkill`.

SHA-256 do trecho: `9607214540b92e4ad78ee39d9db17fdcf8fe89918fe45819871db0f9ebbf70bb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
