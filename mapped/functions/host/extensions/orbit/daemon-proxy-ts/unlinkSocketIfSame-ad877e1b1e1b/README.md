# `unlinkSocketIfSame`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705553-705564](../../../../../../../reference/runtime/host-main.cjs#L705553-L705564) | `FunctionDeclaration` | sim | `path33, expected` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705553-705564](../../../../../../../reference/runtime/host-main.cjs#L705553-L705564) | 2 | 0 | 2 | 0 | 1 | 1 |

### host:705553

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `fcba1d38287292684f7aa219e7b94e1cf535cfdbcfceda5b1dbd265bf5168bcc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
