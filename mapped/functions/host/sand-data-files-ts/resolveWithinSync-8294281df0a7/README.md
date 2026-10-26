# `resolveWithinSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453822-453829](../../../../../reference/runtime/host-main.cjs#L453822-L453829) | `FunctionDeclaration` | não | `root, path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453822-453829](../../../../../reference/runtime/host-main.cjs#L453822-L453829) | 2 | 0 | 0 | 1 | 2 | 0 |

### host:453822

Chamadas escritas diretamente neste corpo: `isPathWithin`, `new UntrustedSandDataFileError`.

Alvos de lançamento explícito: `UntrustedSandDataFileError`.

SHA-256 do trecho: `86c46907b00900624ece611369173db8b49d5859dd976b30e21b71e4d29629fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
