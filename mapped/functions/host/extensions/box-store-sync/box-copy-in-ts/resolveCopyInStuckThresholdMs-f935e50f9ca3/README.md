# `resolveCopyInStuckThresholdMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:482843-482848](../../../../../../../reference/runtime/host-main.cjs#L482843-L482848) | `FunctionDeclaration` | não | `env` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482843-482848](../../../../../../../reference/runtime/host-main.cjs#L482843-L482848) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:482843

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `Number.parseInt`, `env.SAND_BOX_COPY_IN_STUCK_MS.trim`.

SHA-256 do trecho: `7c6712edd4cf246d25d9b6133eee4dc0a7aa85733ded012e079b65adee8ce90b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
