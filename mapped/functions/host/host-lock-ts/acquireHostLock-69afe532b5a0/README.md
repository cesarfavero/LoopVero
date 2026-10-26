# `acquireHostLock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-lock.ts` · [README do módulo](../../../../modules/host/host-lock-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494273-494323](../../../../../reference/runtime/host-main.cjs#L494273-L494323) | `FunctionDeclaration` | sim | `options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494273-494323](../../../../../reference/runtime/host-main.cjs#L494273-L494323) | 6 | 1 | 2 | 2 | 0 | 0 |

### host:494273

Chamadas escritas diretamente neste corpo: `String`, `getHostLockPath`, `isProcessAlive`, `isSandHostProcessCheck`, `makeHandle`, `readLockPid`, `removeLock`, `terminateProcess`, `tryCreateLock`, `waitForExit`.

Alvos de atribuição ou incremento: `attempt`, `outcome`, `previousPid`.

SHA-256 do trecho: `54eefa7175acc8aaffe45bb7e50e345d743e6823d0fe75ef342ca8ac9fadd9c4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
