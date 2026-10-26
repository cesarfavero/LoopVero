# `targetLinkRefusalOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453951-453953](../../../../../reference/runtime/host-main.cjs#L453951-L453953) | `FunctionDeclaration` | não | `error64, path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453951-453953](../../../../../reference/runtime/host-main.cjs#L453951-L453953) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:453951

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `new NoFollowRefusedError`.

SHA-256 do trecho: `e403205b65a8f7a688b080969cf017a598d86497cbc3d1673860557109f99be1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
