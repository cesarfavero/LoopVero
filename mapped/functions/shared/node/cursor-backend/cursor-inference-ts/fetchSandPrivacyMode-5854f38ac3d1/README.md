# `fetchSandPrivacyMode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:224932-224951](../../../../../../../reference/runtime/host-main.cjs#L224932-L224951) | `FunctionDeclaration` | sim | `{   backend,   accessToken,   machineId,   teamId }` |
| [evaluation:511955-511974](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511955-L511974) | `FunctionDeclaration` | sim | `{   backend,   accessToken,   machineId,   teamId }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224932-224951](../../../../../../../reference/runtime/host-main.cjs#L224932-L224951) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:511955-511974](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511955-L511974) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:224932

Chamadas escritas diretamente neste corpo: `client.getUserPrivacyMode`, `createSandCursorBackendClient`, `new GetUserPrivacyModeRequest`.

SHA-256 do trecho: `324bd9c463f967bb2c10cb989a6a83300f7bf7f9e9fa047413b60062eda44e14`.

### evaluation:511955

Chamadas escritas diretamente neste corpo: `client.getUserPrivacyMode`, `createSandCursorBackendClient`, `new GetUserPrivacyModeRequest`.

SHA-256 do trecho: `63804cdfa0bc71852377f93b3a29199b4fbb51aa4f579a27f80eb6a338d948a8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
