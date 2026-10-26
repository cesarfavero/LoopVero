# `boxIsPreparing`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-capabilities.ts` · [README do módulo](../../../../../modules/core/box/box-capabilities-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546692-546694](../../../../../../reference/runtime/host-main.cjs#L546692-L546694) | `FunctionDeclaration` | não | `box, agentId` |
| [evaluation:475796-475798](../../../../../../reference/runtime/sand-eval-runner.cjs#L475796-L475798) | `FunctionDeclaration` | não | `box, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546692-546694](../../../../../../reference/runtime/host-main.cjs#L546692-L546694) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475796-475798](../../../../../../reference/runtime/sand-eval-runner.cjs#L475796-L475798) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546692

Chamadas escritas diretamente neste corpo: `box.isPreparing`.

SHA-256 do trecho: `7d7b3d0803bb1eca1ea67046db2c9e347351f931ff693f54fe2518d0532581cb`.

### evaluation:475796

Chamadas escritas diretamente neste corpo: `box.isPreparing`.

SHA-256 do trecho: `7d7b3d0803bb1eca1ea67046db2c9e347351f931ff693f54fe2518d0532581cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
