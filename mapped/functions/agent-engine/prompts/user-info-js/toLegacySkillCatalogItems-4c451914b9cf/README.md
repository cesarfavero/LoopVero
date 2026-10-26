# `toLegacySkillCatalogItems`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640110-640118](../../../../../../reference/runtime/host-main.cjs#L640110-L640118) | `FunctionDeclaration` | não | `skills` |
| [evaluation:430724-430732](../../../../../../reference/runtime/sand-eval-runner.cjs#L430724-L430732) | `FunctionDeclaration` | não | `skills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640110-640118](../../../../../../reference/runtime/host-main.cjs#L640110-L640118) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430724-430732](../../../../../../reference/runtime/sand-eval-runner.cjs#L430724-L430732) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640110

Chamadas escritas diretamente neste corpo: `skills.map`.

SHA-256 do trecho: `f638b6a3d5718c5737cd34d2a7feac034a159f66e3ec4919e57182d3c1367077`.

### evaluation:430724

Chamadas escritas diretamente neste corpo: `skills.map`.

SHA-256 do trecho: `f638b6a3d5718c5737cd34d2a7feac034a159f66e3ec4919e57182d3c1367077`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
