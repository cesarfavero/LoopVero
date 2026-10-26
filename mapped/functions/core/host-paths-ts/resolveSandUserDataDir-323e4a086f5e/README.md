# `resolveSandUserDataDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/host-paths.ts` · [README do módulo](../../../../modules/core/host-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430893-430898](../../../../../reference/runtime/host-main.cjs#L430893-L430898) | `FunctionDeclaration` | não | `argv = [], env = process.env, cwd = process.cwd()` |
| [evaluation:530485-530490](../../../../../reference/runtime/sand-eval-runner.cjs#L530485-L530490) | `FunctionDeclaration` | não | `argv = [], env = process.env, cwd = process.cwd()` |
| [state-worker:404-409](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L404-L409) | `FunctionDeclaration` | não | `argv = [], env = process.env, cwd = process.cwd()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430893-430898](../../../../../reference/runtime/host-main.cjs#L430893-L430898) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:530485-530490](../../../../../reference/runtime/sand-eval-runner.cjs#L530485-L530490) | 2 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:404-409](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L404-L409) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:430893

Chamadas escritas diretamente neste corpo: `raw.trim`, `readUserDataDirArg`.

SHA-256 do trecho: `d891ac00b7c6f766278a1a32c68bdef7f262a5cba79c424d0429485844b07681`.

### evaluation:530485

Chamadas escritas diretamente neste corpo: `raw.trim`, `readUserDataDirArg`.

SHA-256 do trecho: `c3a8d9a5990dafa5e87d53089d63d68a4a4a9fc9c801a271e705bdb105a9e3f4`.

### state-worker:404

Chamadas escritas diretamente neste corpo: `raw.trim`, `readUserDataDirArg`.

SHA-256 do trecho: `88830741d2ba43edaf62c81a84d2613a95d56bd770a36b770f5c9c166fc117b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
