# `isBoxFileMissingError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-transfer.ts` · [README do módulo](../../../../../modules/core/box/box-transfer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476472-476477](../../../../../../reference/runtime/host-main.cjs#L476472-L476477) | `FunctionDeclaration` | não | `error64` |
| [evaluation:515610-515615](../../../../../../reference/runtime/sand-eval-runner.cjs#L515610-L515615) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476472-476477](../../../../../../reference/runtime/host-main.cjs#L476472-L476477) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:515610-515615](../../../../../../reference/runtime/sand-eval-runner.cjs#L515610-L515615) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:476472

Chamadas escritas diretamente neste corpo: `error64.message.toLowerCase`, `findSystemErrno`, `message.includes`.

SHA-256 do trecho: `aa5f1c342b803108d35ce1b731b4f4a8f29150fd938a995ef0e1cf150d7ac665`.

### evaluation:515610

Chamadas escritas diretamente neste corpo: `error63.message.toLowerCase`, `findSystemErrno`, `message.includes`.

SHA-256 do trecho: `8eeee64615372a195a88ee393886ae7e5f455b3966e387e065022737d1670e12`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
