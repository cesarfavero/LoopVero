# `getComposer2CustomUserRulesForModel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640277-640327](../../../../../../reference/runtime/host-main.cjs#L640277-L640327) | `FunctionDeclaration` | não | `modelInfo, featureFlags, options2` |
| [evaluation:430891-430941](../../../../../../reference/runtime/sand-eval-runner.cjs#L430891-L430941) | `FunctionDeclaration` | não | `modelInfo, featureFlags, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640277-640327](../../../../../../reference/runtime/host-main.cjs#L640277-L640327) | 13 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:430891-430941](../../../../../../reference/runtime/sand-eval-runner.cjs#L430891-L430941) | 13 | 0 | 0 | 4 | 0 | 0 |

### host:640277

Chamadas escritas diretamente neste corpo: `buildMatterhornAwaitToolUserRule`, `buildMatterhornGrepRule`, `buildMatterhornShellToolUserRule`, `shouldInjectUiBrowserVerificationPrompt`.

SHA-256 do trecho: `8bd3d4c02e780344a9e47c50be50cecde5fd9118e8b7df80fd75a3c1c7ad6355`.

### evaluation:430891

Chamadas escritas diretamente neste corpo: `buildMatterhornAwaitToolUserRule`, `buildMatterhornGrepRule`, `buildMatterhornShellToolUserRule`, `shouldInjectUiBrowserVerificationPrompt`.

SHA-256 do trecho: `8bd3d4c02e780344a9e47c50be50cecde5fd9118e8b7df80fd75a3c1c7ad6355`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
