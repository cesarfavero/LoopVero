# `readBoundedSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453774-453789](../../../../../reference/runtime/host-main.cjs#L453774-L453789) | `FunctionDeclaration` | não | `fd, path33, maxBytes` |
| [evaluation:627516-627531](../../../../../reference/runtime/sand-eval-runner.cjs#L627516-L627531) | `FunctionDeclaration` | não | `fd, path33, maxBytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453774-453789](../../../../../reference/runtime/host-main.cjs#L453774-L453789) | 3 | 1 | 0 | 1 | 1 | 0 |
| [evaluation:627516-627531](../../../../../reference/runtime/sand-eval-runner.cjs#L627516-L627531) | 3 | 1 | 0 | 1 | 1 | 0 |

### host:453774

Chamadas escritas diretamente neste corpo: `Buffer.allocUnsafe`, `Math.max`, `Math.min`, `buffer.copy`, `buffer.toString`, `oversizedSandDataFile`.

Alvos de atribuição ou incremento: `buffer`, `length`.

Alvos de lançamento explícito: `oversizedSandDataFile`.

SHA-256 do trecho: `63c4dcb676c930cbb705d8e2d9ef233aa7eacd025aa438821ee692a90ea06399`.

### evaluation:627516

Chamadas escritas diretamente neste corpo: `Buffer.allocUnsafe`, `Math.max`, `Math.min`, `buffer.copy`, `buffer.toString`, `oversizedSandDataFile`.

Alvos de atribuição ou incremento: `buffer`, `length`.

Alvos de lançamento explícito: `oversizedSandDataFile`.

SHA-256 do trecho: `1836e606d8914f71f2a9619a83ab44eb6b369a53258170ddac173cb35c16759c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
