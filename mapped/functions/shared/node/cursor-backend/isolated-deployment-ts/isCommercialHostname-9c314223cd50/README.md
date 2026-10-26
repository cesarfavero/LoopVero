# `isCommercialHostname`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/isolated-deployment.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451559-451562](../../../../../../../reference/runtime/host-main.cjs#L451559-L451562) | `FunctionDeclaration` | não | `hostname4` |
| [evaluation:597105-597108](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597105-L597108) | `FunctionDeclaration` | não | `hostname3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451559-451562](../../../../../../../reference/runtime/host-main.cjs#L451559-L451562) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:597105-597108](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597105-L597108) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:451559

Chamadas escritas diretamente neste corpo: `COMMERCIAL_DOMAINS.some`, `normalizedHostname`.

SHA-256 do trecho: `f4cd374db4e8a9c306050e19de2ce5dbb4db69b778de2837144c7d98e9ce9950`.

### evaluation:597105

Chamadas escritas diretamente neste corpo: `COMMERCIAL_DOMAINS.some`, `normalizedHostname2`.

SHA-256 do trecho: `21f5d44bce67173ce98831949a45a321bbea2af6f7337db5fb6e8504c22c2232`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
