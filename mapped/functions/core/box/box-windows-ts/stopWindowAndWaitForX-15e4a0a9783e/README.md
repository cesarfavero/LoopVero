# `stopWindowAndWaitForX`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-windows.ts` · [README do módulo](../../../../../modules/core/box/box-windows-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553901-553904](../../../../../../reference/runtime/host-main.cjs#L553901-L553904) | `FunctionDeclaration` | não | `windowIndex, mode = "stop"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553901-553904](../../../../../../reference/runtime/host-main.cjs#L553901-L553904) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:553901

Chamadas escritas diretamente neste corpo: `scriptDyingWithLockHolder`.

SHA-256 do trecho: `e3308a61a2ca45d56ad732190a2017128d90193c525c5f1996a748333ef97d47`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
