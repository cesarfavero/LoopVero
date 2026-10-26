# `isSandDataPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454038-454040](../../../../../reference/runtime/host-main.cjs#L454038-L454040) | `FunctionDeclaration` | não | `path33` |
| [evaluation:627638-627640](../../../../../reference/runtime/sand-eval-runner.cjs#L627638-L627640) | `FunctionDeclaration` | não | `path33` |
| [state-worker:639-641](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L639-L641) | `FunctionDeclaration` | não | `path` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454038-454040](../../../../../reference/runtime/host-main.cjs#L454038-L454040) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627638-627640](../../../../../reference/runtime/sand-eval-runner.cjs#L627638-L627640) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:639-641](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L639-L641) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454038

Chamadas escritas diretamente neste corpo: `isPathWithin`, `sandDataAnchor`.

SHA-256 do trecho: `c61c1b3691504955e0a66ad5cd5a483fba0c23c73271600e68d55a00c73ee2fd`.

### evaluation:627638

Chamadas escritas diretamente neste corpo: `isPathWithin2`, `sandDataAnchor`.

SHA-256 do trecho: `0fbe23d02317c6bf18da7db08ab45d570a21ad07ab6b22a6c183b3852660476e`.

### state-worker:639

Chamadas escritas diretamente neste corpo: `isPathWithin`, `sandDataAnchor`.

SHA-256 do trecho: `96227e849fd19c63f4e781a9f8f1b5517752a8f12d46d9815cd779a0962375eb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
