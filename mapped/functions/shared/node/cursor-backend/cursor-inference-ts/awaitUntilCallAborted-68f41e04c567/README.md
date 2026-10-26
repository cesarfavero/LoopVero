# `awaitUntilCallAborted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225086-225106](../../../../../../../reference/runtime/host-main.cjs#L225086-L225106) | `FunctionDeclaration` | sim | `signal, work` |
| [evaluation:512149-512169](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512149-L512169) | `FunctionDeclaration` | sim | `signal, work` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225086-225106](../../../../../../../reference/runtime/host-main.cjs#L225086-L225106) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:512149-512169](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512149-L512169) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:225086

Chamadas escritas diretamente neste corpo: `ConnectError.from`, `new Promise`.

Alvos de lançamento explícito: `ConnectError.from`.

SHA-256 do trecho: `6df291091240d1783ed49fa8116a91fb2cdc90e06033a8e3788a21f0b970df0e`.

### evaluation:512149

Chamadas escritas diretamente neste corpo: `ConnectError.from`, `new Promise`.

Alvos de lançamento explícito: `ConnectError.from`.

SHA-256 do trecho: `0dd4346ff351308718f194174d87d28b851083d8d559ac9abeab456b454b0a63`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
