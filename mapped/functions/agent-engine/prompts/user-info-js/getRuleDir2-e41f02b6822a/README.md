# `getRuleDir2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639864-639878](../../../../../../reference/runtime/host-main.cjs#L639864-L639878) | `FunctionDeclaration` | não | `mdcPath` |
| [evaluation:430478-430492](../../../../../../reference/runtime/sand-eval-runner.cjs#L430478-L430492) | `FunctionDeclaration` | não | `mdcPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639864-639878](../../../../../../reference/runtime/host-main.cjs#L639864-L639878) | 2 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:430478-430492](../../../../../../reference/runtime/sand-eval-runner.cjs#L430478-L430492) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:639864

Chamadas escritas diretamente neste corpo: `literalRuleDir.split`, `normalizeToUnixPath`, `parentSegments.join`, `segments.slice`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `80366687dd814823b70e1517613882fca2c782946355f40ef310424418b93900`.

### evaluation:430478

Chamadas escritas diretamente neste corpo: `literalRuleDir.split`, `normalizeToUnixPath`, `parentSegments.join`, `segments.slice`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `3002c88df8667d8500927cd86a47ee3883805fb52fbab99815afe24c7a1aae68`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
