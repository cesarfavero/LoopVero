# `userDesktopToolsForHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781836-781874](../../../../../../../../reference/runtime/host-main.cjs#L781836-L781874) | `FunctionDeclaration` | não | `host` |
| [evaluation:582181-582219](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582181-L582219) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781836-781874](../../../../../../../../reference/runtime/host-main.cjs#L781836-L781874) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582181-582219](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582181-L582219) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:781836

Chamadas escritas diretamente neste corpo: `COMPUTER_USE_CATALOG.tools.map`, `accessor.register`, `new RegistryResourceAccessor`, `withDeviceToolPermissionCards`.

SHA-256 do trecho: `e8f8e5f7c0dcf4fc103f936f0c8efd6d745157ddb3e49785f705de16d268f77a`.

### evaluation:582181

Chamadas escritas diretamente neste corpo: `COMPUTER_USE_CATALOG.tools.map`, `accessor.register`, `new RegistryResourceAccessor`, `withDeviceToolPermissionCards`.

SHA-256 do trecho: `e8f8e5f7c0dcf4fc103f936f0c8efd6d745157ddb3e49785f705de16d268f77a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
