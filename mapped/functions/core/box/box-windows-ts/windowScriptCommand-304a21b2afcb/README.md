# `windowScriptCommand`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-windows.ts` · [README do módulo](../../../../../modules/core/box/box-windows-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553951-553960](../../../../../../reference/runtime/host-main.cjs#L553951-L553960) | `FunctionDeclaration` | não | `label, windowIndex, opts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553951-553960](../../../../../../reference/runtime/host-main.cjs#L553951-L553960) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:553951

Chamadas escritas diretamente neste corpo: `scriptDyingWithLockHolder`, `startWindowCommand`, `stopWindowCommand`, `underWindowLock`.

SHA-256 do trecho: `7041dc3bd598567e923bb91c20d5cc7653eea913eb357812f3f6fd5b78dd22ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
